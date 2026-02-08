# DefaultApi

All URIs are relative to *http://localhost:5000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**adminSummaryGet**](#adminsummaryget) | **GET** /admin/summary | Admin summary|
|[**authLoginPost**](#authloginpost) | **POST** /auth/login | Login|
|[**authRegisterPost**](#authregisterpost) | **POST** /auth/register | Register|
|[**categoriesGet**](#categoriesget) | **GET** /categories | List categories|
|[**categoriesIdDelete**](#categoriesiddelete) | **DELETE** /categories/{id} | Deactivate category|
|[**categoriesIdGet**](#categoriesidget) | **GET** /categories/{id} | Get category by id|
|[**categoriesIdPut**](#categoriesidput) | **PUT** /categories/{id} | Update category|
|[**categoriesIdStatusPatch**](#categoriesidstatuspatch) | **PATCH** /categories/{id}/status | Activate or deactivate category|
|[**categoriesPost**](#categoriespost) | **POST** /categories | Create category|
|[**healthGet**](#healthget) | **GET** /health | Health check|
|[**rootGet**](#rootget) | **GET** / | Root endpoint|
|[**subCategoriesGet**](#subcategoriesget) | **GET** /sub-categories | List sub-categories|
|[**subCategoriesIdDelete**](#subcategoriesiddelete) | **DELETE** /sub-categories/{id} | Deactivate sub-category|
|[**subCategoriesIdGet**](#subcategoriesidget) | **GET** /sub-categories/{id} | Get sub-category by id|
|[**subCategoriesIdPut**](#subcategoriesidput) | **PUT** /sub-categories/{id} | Update sub-category|
|[**subCategoriesIdStatusPatch**](#subcategoriesidstatuspatch) | **PATCH** /sub-categories/{id}/status | Activate or deactivate sub-category|
|[**subCategoriesPost**](#subcategoriespost) | **POST** /sub-categories | Create sub-category|

# **adminSummaryGet**
> AdminSummaryGet200Response adminSummaryGet()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'backend-api-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.adminSummaryGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**AdminSummaryGet200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Summary data |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authLoginPost**
> AuthTokenResponse authLoginPost(loginRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    LoginRequest
} from 'backend-api-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let loginRequest: LoginRequest; //

const { status, data } = await apiInstance.authLoginPost(
    loginRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loginRequest** | **LoginRequest**|  | |


### Return type

**AuthTokenResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Login result |  -  |
|**400** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authRegisterPost**
> AuthTokenResponse authRegisterPost(registerRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    RegisterRequest
} from 'backend-api-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let registerRequest: RegisterRequest; //

const { status, data } = await apiInstance.authRegisterPost(
    registerRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **registerRequest** | **RegisterRequest**|  | |


### Return type

**AuthTokenResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Registration result |  -  |
|**400** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **categoriesGet**
> Array<Category> categoriesGet()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'backend-api-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.categoriesGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<Category>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Category list |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **categoriesIdDelete**
> Category categoriesIdDelete()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'backend-api-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.categoriesIdDelete(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**Category**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Category deactivated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **categoriesIdGet**
> Category categoriesIdGet()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'backend-api-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.categoriesIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**Category**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Category |  -  |
|**404** | Category not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **categoriesIdPut**
> Category categoriesIdPut(updateCategoryRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    UpdateCategoryRequest
} from 'backend-api-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; // (default to undefined)
let updateCategoryRequest: UpdateCategoryRequest; //

const { status, data } = await apiInstance.categoriesIdPut(
    id,
    updateCategoryRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateCategoryRequest** | **UpdateCategoryRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**Category**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated category |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **categoriesIdStatusPatch**
> Category categoriesIdStatusPatch(setCategoryActiveRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    SetCategoryActiveRequest
} from 'backend-api-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; // (default to undefined)
let setCategoryActiveRequest: SetCategoryActiveRequest; //

const { status, data } = await apiInstance.categoriesIdStatusPatch(
    id,
    setCategoryActiveRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **setCategoryActiveRequest** | **SetCategoryActiveRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**Category**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated category status |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **categoriesPost**
> Category categoriesPost(createCategoryRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateCategoryRequest
} from 'backend-api-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createCategoryRequest: CreateCategoryRequest; //

const { status, data } = await apiInstance.categoriesPost(
    createCategoryRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createCategoryRequest** | **CreateCategoryRequest**|  | |


### Return type

**Category**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Created category |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **healthGet**
> HealthGet200Response healthGet()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'backend-api-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.healthGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**HealthGet200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Service is healthy |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rootGet**
> rootGet()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'backend-api-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.rootGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Basic greeting |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **subCategoriesGet**
> Array<SubCategory> subCategoriesGet()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'backend-api-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.subCategoriesGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<SubCategory>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Sub-category list |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **subCategoriesIdDelete**
> SubCategory subCategoriesIdDelete()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'backend-api-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.subCategoriesIdDelete(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**SubCategory**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Sub-category deactivated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **subCategoriesIdGet**
> SubCategory subCategoriesIdGet()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'backend-api-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.subCategoriesIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**SubCategory**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Sub-category |  -  |
|**404** | Sub-category not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **subCategoriesIdPut**
> SubCategory subCategoriesIdPut(updateSubCategoryRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    UpdateSubCategoryRequest
} from 'backend-api-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; // (default to undefined)
let updateSubCategoryRequest: UpdateSubCategoryRequest; //

const { status, data } = await apiInstance.subCategoriesIdPut(
    id,
    updateSubCategoryRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateSubCategoryRequest** | **UpdateSubCategoryRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**SubCategory**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated sub-category |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **subCategoriesIdStatusPatch**
> SubCategory subCategoriesIdStatusPatch(setSubCategoryActiveRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    SetSubCategoryActiveRequest
} from 'backend-api-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; // (default to undefined)
let setSubCategoryActiveRequest: SetSubCategoryActiveRequest; //

const { status, data } = await apiInstance.subCategoriesIdStatusPatch(
    id,
    setSubCategoryActiveRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **setSubCategoryActiveRequest** | **SetSubCategoryActiveRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**SubCategory**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated sub-category status |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **subCategoriesPost**
> SubCategory subCategoriesPost(createSubCategoryRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateSubCategoryRequest
} from 'backend-api-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createSubCategoryRequest: CreateSubCategoryRequest; //

const { status, data } = await apiInstance.subCategoriesPost(
    createSubCategoryRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createSubCategoryRequest** | **CreateSubCategoryRequest**|  | |


### Return type

**SubCategory**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Created sub-category |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

