/*
Deepfence ThreatMapper

Deepfence Runtime API provides programmatic control over Deepfence microservice securing your container, kubernetes and cloud deployments. The API abstracts away underlying infrastructure details like cloud provider,  container distros, container orchestrator and type of deployment. This is one uniform API to manage and control security alerts, policies and response to alerts for microservices running anywhere i.e. managed pure greenfield container deployments or a mix of containers, VMs and serverless paradigms like AWS Fargate.

API version: 2.0.0
Contact: community@deepfence.io
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package deepfence_server_client

import (
	"encoding/json"
)

// checks if the ModelScanStatus type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ModelScanStatus{}

// ModelScanStatus struct for ModelScanStatus
type ModelScanStatus struct {
	Status string `json:"status"`
}

// NewModelScanStatus instantiates a new ModelScanStatus object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewModelScanStatus(status string) *ModelScanStatus {
	this := ModelScanStatus{}
	this.Status = status
	return &this
}

// NewModelScanStatusWithDefaults instantiates a new ModelScanStatus object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewModelScanStatusWithDefaults() *ModelScanStatus {
	this := ModelScanStatus{}
	return &this
}

// GetStatus returns the Status field value
func (o *ModelScanStatus) GetStatus() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Status
}

// GetStatusOk returns a tuple with the Status field value
// and a boolean to check if the value has been set.
func (o *ModelScanStatus) GetStatusOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Status, true
}

// SetStatus sets field value
func (o *ModelScanStatus) SetStatus(v string) {
	o.Status = v
}

func (o ModelScanStatus) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ModelScanStatus) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	toSerialize["status"] = o.Status
	return toSerialize, nil
}

type NullableModelScanStatus struct {
	value *ModelScanStatus
	isSet bool
}

func (v NullableModelScanStatus) Get() *ModelScanStatus {
	return v.value
}

func (v *NullableModelScanStatus) Set(val *ModelScanStatus) {
	v.value = val
	v.isSet = true
}

func (v NullableModelScanStatus) IsSet() bool {
	return v.isSet
}

func (v *NullableModelScanStatus) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableModelScanStatus(val *ModelScanStatus) *NullableModelScanStatus {
	return &NullableModelScanStatus{value: val, isSet: true}
}

func (v NullableModelScanStatus) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableModelScanStatus) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

