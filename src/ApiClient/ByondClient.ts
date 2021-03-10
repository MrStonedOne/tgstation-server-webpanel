import { ApiClient } from "./_base";
import { Components } from "./generatedcode/_generated";
import InternalError, { ErrorCode, GenericErrors } from "./models/InternalComms/InternalError";
import InternalStatus, { StatusCode } from "./models/InternalComms/InternalStatus";
import ServerClient from "./ServerClient";
import TransferClient, { UploadErrors } from "./TransferClient";

export default new (class ByondClient extends ApiClient {
    public async getActiveVersion(
        instance: number
    ): Promise<InternalStatus<Components.Schemas.ByondResponse, GenericErrors>> {
        await ServerClient.wait4Init();

        let response;
        try {
            response = await ServerClient.apiClient!.ByondController_Read({ Instance: instance });
        } catch (stat) {
            return new InternalStatus({
                code: StatusCode.ERROR,
                error: stat as InternalError<GenericErrors>
            });
        }

        switch (response.status) {
            case 200: {
                return new InternalStatus({
                    code: StatusCode.OK,
                    payload: response.data as Components.Schemas.ByondResponse
                });
            }
            default: {
                return new InternalStatus({
                    code: StatusCode.ERROR,
                    error: new InternalError(
                        ErrorCode.UNHANDLED_RESPONSE,
                        { axiosResponse: response },
                        response
                    )
                });
            }
        }
    }

    public async listAllVersions(
        instance: number
    ): Promise<InternalStatus<Components.Schemas.PaginatedByondResponse, GenericErrors>> {
        await ServerClient.wait4Init();

        let response;
        try {
            response = await ServerClient.apiClient!.ByondController_List({
                Instance: instance,
                page: 1,
                pageSize: 100
            });
        } catch (stat) {
            return new InternalStatus({
                code: StatusCode.ERROR,
                error: stat as InternalError<GenericErrors>
            });
        }

        switch (response.status) {
            case 200: {
                return new InternalStatus({
                    code: StatusCode.OK,
                    payload: response.data as Components.Schemas.PaginatedByondResponse
                });
            }
            default: {
                return new InternalStatus({
                    code: StatusCode.ERROR,
                    error: new InternalError(
                        ErrorCode.UNHANDLED_RESPONSE,
                        { axiosResponse: response },
                        response
                    )
                });
            }
        }
    }

    public async switchActive(
        instance: number,
        version: string,
        file?: ArrayBuffer
    ): Promise<InternalStatus<Components.Schemas.ByondInstallResponse, UploadErrors>> {
        await ServerClient.wait4Init();

        let response;
        try {
            response = await ServerClient.apiClient!.ByondController_Update(
                { Instance: instance },
                { version: version, uploadCustomZip: !!file }
            );
        } catch (stat) {
            return new InternalStatus({
                code: StatusCode.ERROR,
                error: stat as InternalError<GenericErrors>
            });
        }

        switch (response.status) {
            case 200:
            case 202: {
                const responseData = response.data as Components.Schemas.ByondInstallResponse;
                if (responseData.fileTicket) {
                    if (file) {
                        const response2 = await TransferClient.Upload(
                            responseData.fileTicket,
                            file
                        );
                        if (response2.code === StatusCode.OK) {
                            return new InternalStatus({
                                code: StatusCode.OK,
                                payload: responseData
                            });
                        } else {
                            return new InternalStatus({
                                code: StatusCode.ERROR,
                                error: response2.error
                            });
                        }
                    } else {
                        return new InternalStatus({
                            code: StatusCode.ERROR,
                            error: new InternalError(ErrorCode.APP_FAIL, {
                                jsError: Error(
                                    "switchActive is uploading a custom zip without actually having a zip file to upload"
                                )
                            })
                        });
                    }
                }

                return new InternalStatus({
                    code: StatusCode.OK,
                    payload: response.data as Components.Schemas.ByondInstallResponse
                });
            }
            default: {
                return new InternalStatus({
                    code: StatusCode.ERROR,
                    error: new InternalError(
                        ErrorCode.UNHANDLED_RESPONSE,
                        { axiosResponse: response },
                        response
                    )
                });
            }
        }
    }
})();
