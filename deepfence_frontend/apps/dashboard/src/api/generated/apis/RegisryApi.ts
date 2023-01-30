/* tslint:disable */
/* eslint-disable */
/**
 * Deepfence ThreatMapper
 * Deepfence Runtime API provides programmatic control over Deepfence microservice securing your container, kubernetes and cloud deployments. The API abstracts away underlying infrastructure details like cloud provider,  container distros, container orchestrator and type of deployment. This is one uniform API to manage and control security alerts, policies and response to alerts for microservices running anywhere i.e. managed pure greenfield container deployments or a mix of containers, VMs and serverless paradigms like AWS Fargate.
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: community@deepfence.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  ApiDocsBadRequestResponse,
  ApiDocsFailureResponse,
  ModelRegistryAddReq,
} from '../models';
import {
    ApiDocsBadRequestResponseFromJSON,
    ApiDocsBadRequestResponseToJSON,
    ApiDocsFailureResponseFromJSON,
    ApiDocsFailureResponseToJSON,
    ModelRegistryAddReqFromJSON,
    ModelRegistryAddReqToJSON,
} from '../models';

export interface AddRegistryRequest {
    modelRegistryAddReq?: ModelRegistryAddReq;
}

/**
 * RegisryApi - interface
 * 
 * @export
 * @interface RegisryApiInterface
 */
export interface RegisryApiInterface {
    /**
     * Add a new supported registry
     * @summary Add Registry
     * @param {ModelRegistryAddReq} [modelRegistryAddReq] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RegisryApiInterface
     */
    addRegistryRaw(requestParameters: AddRegistryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Add a new supported registry
     * Add Registry
     */
    addRegistry(requestParameters: AddRegistryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * List all the images present in all the registries
     * @summary List Images in Registry
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RegisryApiInterface
     */
    listImagesInRegistryRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * List all the images present in all the registries
     * List Images in Registry
     */
    listImagesInRegistry(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * List all the added Registry
     * @summary List Images in Registry
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RegisryApiInterface
     */
    listRegistryRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<object>>>;

    /**
     * List all the added Registry
     * List Images in Registry
     */
    listRegistry(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<object>>;

}

/**
 * 
 */
export class RegisryApi extends runtime.BaseAPI implements RegisryApiInterface {

    /**
     * Add a new supported registry
     * Add Registry
     */
    async addRegistryRaw(requestParameters: AddRegistryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/deepfence/container-registry/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ModelRegistryAddReqToJSON(requestParameters.modelRegistryAddReq),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Add a new supported registry
     * Add Registry
     */
    async addRegistry(requestParameters: AddRegistryRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.addRegistryRaw(requestParameters, initOverrides);
    }

    /**
     * List all the images present in all the registries
     * List Images in Registry
     */
    async listImagesInRegistryRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/deepfence/container-registry/images`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * List all the images present in all the registries
     * List Images in Registry
     */
    async listImagesInRegistry(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.listImagesInRegistryRaw(initOverrides);
    }

    /**
     * List all the added Registry
     * List Images in Registry
     */
    async listRegistryRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<object>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/deepfence/container-registry/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * List all the added Registry
     * List Images in Registry
     */
    async listRegistry(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<object>> {
        const response = await this.listRegistryRaw(initOverrides);
        return await response.value();
    }

}