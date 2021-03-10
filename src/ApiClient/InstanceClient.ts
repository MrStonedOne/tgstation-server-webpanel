import { ApiClient } from "./_base";
import { Components } from "./generatedcode/_generated";
import InternalError, { ErrorCode, GenericErrors } from "./models/InternalComms/InternalError";
import InternalStatus, { StatusCode } from "./models/InternalComms/InternalStatus";
import ServerClient, { RequireAtLeastOne } from "./ServerClient";

export type ListInstancesErrors = GenericErrors;
export type CreateInstanceErrors = GenericErrors;
export type EditInstanceErrors = GenericErrors | ErrorCode.INSTANCE_NO_DB_ENTITY;
export type GetInstanceErrors = GenericErrors | ErrorCode.INSTANCE_NO_DB_ENTITY;

export default new (class InstanceClient extends ApiClient {
    public async listInstances(): Promise<
        InternalStatus<Components.Schemas.Instance[], ListInstancesErrors>
    > {
        await ServerClient.wait4Init();

        let response;
        try {
            response = await ServerClient.apiClient!.InstanceController_List({
                pageSize: 100,
                page: 1
            });
        } catch (stat) {
            return new InternalStatus({
                code: StatusCode.ERROR,
                error: stat as InternalError<GenericErrors>
            });
        }

        switch (response.status) {
            case 200: {
                const payload = (response.data as Components.Schemas.PaginatedInstance)!.content.sort(
                    (a, b) => a.id - b.id
                );

                return new InternalStatus({
                    code: StatusCode.OK,
                    payload
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

    public async editInstance(
        instance: RequireAtLeastOne<Components.Schemas.Instance>
    ): Promise<InternalStatus<Components.Schemas.Instance, EditInstanceErrors>> {
        await ServerClient.wait4Init();

        let response;
        try {
            response = await ServerClient.apiClient!.InstanceController_Update(
                null,
                instance as Components.Schemas.Instance
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
                const instance = response.data as Components.Schemas.Instance;

                return new InternalStatus({
                    code: StatusCode.OK,
                    payload: instance
                });
            }
            case 410:
                return new InternalStatus({
                    code: StatusCode.ERROR,
                    error: new InternalError(ErrorCode.INSTANCE_NO_DB_ENTITY, {
                        errorMessage: response.data as Components.Schemas.ErrorMessage
                    })
                });
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

    public async createInstance(
        instance: Components.Schemas.Instance
    ): Promise<InternalStatus<Components.Schemas.Instance, CreateInstanceErrors>> {
        await ServerClient.wait4Init();

        let response;
        try {
            response = await ServerClient.apiClient!.InstanceController_Create(null, instance);
        } catch (stat) {
            return new InternalStatus({
                code: StatusCode.ERROR,
                error: stat as InternalError<GenericErrors>
            });
        }
        switch (response.status) {
            case 200:
            case 201: {
                const instance = response.data as Components.Schemas.Instance;

                return new InternalStatus({
                    code: StatusCode.OK,
                    payload: instance
                });
            }
            case 409:
                return new InternalStatus({
                    code: StatusCode.ERROR,
                    error: new InternalError(ErrorCode.HTTP_DATA_INEGRITY, {
                        errorMessage: response.data as Components.Schemas.ErrorMessage
                    })
                });
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

    public async getInstance(
        instanceid: number
    ): Promise<InternalStatus<Components.Schemas.Instance, GetInstanceErrors>> {
        await ServerClient.wait4Init();

        let response;
        try {
            response = await ServerClient.apiClient!.InstanceController_GetId({ id: instanceid });
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
                    payload: response.data as Components.Schemas.Instance
                });
            }
            case 410:
                return new InternalStatus({
                    code: StatusCode.ERROR,
                    error: new InternalError(ErrorCode.INSTANCE_NO_DB_ENTITY, {
                        errorMessage: response.data as Components.Schemas.ErrorMessage
                    })
                });
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
