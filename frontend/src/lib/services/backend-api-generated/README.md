## backend-api-client@1.0.0

This generator creates TypeScript/JavaScript client that utilizes [axios](https://github.com/axios/axios). The generated Node module can be used in the following environments:

Environment
* Node.js
* Webpack
* Browserify

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition will be automatically resolved via `package.json`. ([Reference](https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html))

### Building

To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```

### Publishing

First build the package then run `npm publish`

### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
npm install backend-api-client@1.0.0 --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
```

### Documentation for API Endpoints

All URIs are relative to *http://localhost:5000*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*DefaultApi* | [**adminSummaryGet**](docs/DefaultApi.md#adminsummaryget) | **GET** /admin/summary | Admin summary
*DefaultApi* | [**authLoginPost**](docs/DefaultApi.md#authloginpost) | **POST** /auth/login | Login
*DefaultApi* | [**authRegisterPost**](docs/DefaultApi.md#authregisterpost) | **POST** /auth/register | Register
*DefaultApi* | [**categoriesGet**](docs/DefaultApi.md#categoriesget) | **GET** /categories | List categories
*DefaultApi* | [**categoriesIdDelete**](docs/DefaultApi.md#categoriesiddelete) | **DELETE** /categories/{id} | Deactivate category
*DefaultApi* | [**categoriesIdGet**](docs/DefaultApi.md#categoriesidget) | **GET** /categories/{id} | Get category by id
*DefaultApi* | [**categoriesIdPut**](docs/DefaultApi.md#categoriesidput) | **PUT** /categories/{id} | Update category
*DefaultApi* | [**categoriesIdStatusPatch**](docs/DefaultApi.md#categoriesidstatuspatch) | **PATCH** /categories/{id}/status | Activate or deactivate category
*DefaultApi* | [**categoriesPost**](docs/DefaultApi.md#categoriespost) | **POST** /categories | Create category
*DefaultApi* | [**healthGet**](docs/DefaultApi.md#healthget) | **GET** /health | Health check
*DefaultApi* | [**rootGet**](docs/DefaultApi.md#rootget) | **GET** / | Root endpoint
*DefaultApi* | [**subCategoriesGet**](docs/DefaultApi.md#subcategoriesget) | **GET** /sub-categories | List sub-categories
*DefaultApi* | [**subCategoriesIdDelete**](docs/DefaultApi.md#subcategoriesiddelete) | **DELETE** /sub-categories/{id} | Deactivate sub-category
*DefaultApi* | [**subCategoriesIdGet**](docs/DefaultApi.md#subcategoriesidget) | **GET** /sub-categories/{id} | Get sub-category by id
*DefaultApi* | [**subCategoriesIdPut**](docs/DefaultApi.md#subcategoriesidput) | **PUT** /sub-categories/{id} | Update sub-category
*DefaultApi* | [**subCategoriesIdStatusPatch**](docs/DefaultApi.md#subcategoriesidstatuspatch) | **PATCH** /sub-categories/{id}/status | Activate or deactivate sub-category
*DefaultApi* | [**subCategoriesPost**](docs/DefaultApi.md#subcategoriespost) | **POST** /sub-categories | Create sub-category


### Documentation For Models

 - [AdminSummaryGet200Response](docs/AdminSummaryGet200Response.md)
 - [ApiError](docs/ApiError.md)
 - [ApiErrorError](docs/ApiErrorError.md)
 - [AuthTokenResponse](docs/AuthTokenResponse.md)
 - [Category](docs/Category.md)
 - [CreateCategoryRequest](docs/CreateCategoryRequest.md)
 - [CreateSubCategoryRequest](docs/CreateSubCategoryRequest.md)
 - [HealthGet200Response](docs/HealthGet200Response.md)
 - [LoginRequest](docs/LoginRequest.md)
 - [RegisterRequest](docs/RegisterRequest.md)
 - [SetCategoryActiveRequest](docs/SetCategoryActiveRequest.md)
 - [SetSubCategoryActiveRequest](docs/SetSubCategoryActiveRequest.md)
 - [SubCategory](docs/SubCategory.md)
 - [UpdateCategoryRequest](docs/UpdateCategoryRequest.md)
 - [UpdateSubCategoryRequest](docs/UpdateSubCategoryRequest.md)


<a id="documentation-for-authorization"></a>
## Documentation For Authorization

Endpoints do not require authorization.

