<p align="center"><img src="https://laravel.com/assets/img/components/logo-laravel.svg"></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/d/total.svg" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/v/stable.svg" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/license.svg" alt="License"></a>
</p>

## Laravel Esperlos boilerplate

+CedarMapHelper for handling cedar map apis

+FirebaseHelper for handling firebase apis

+JalaliDateHelper, NumbersHelper for handling persian date and numbers

+SmsPanelHelper for handling sms panel apis

+UploadHelper for handling file and image uploads

+ResponseHelper, InputHelper for easier api handling using a better pattern

+ControllerGenerator to generate controllers with our pattern

+Setup vue, vuex, vue router and other vue essential packages by default

+Done some other customizes for easier use of Helpers

+New example for Model/Controller/Vue files

# Setup

```
git clone --depth=1 --branch=master https://github.com/Esperlos/laravel_esperlos_boilerplate.git ProjectName
rm -rf ./ProjectName/.git
cd ProjectName
composer install
npm install
```

Copy .env.example file and remove .example suffix
 
then:

```
php artisan key:generate
```

then you can  set db configs, set migrations and so on ...

# Running

```
php artisan serve
```

```
npm run watch
```

# Generating Controller

This command will generate a controller in app/http/controller/api/ folder

```
php ControllerGenerator.php --name=ControllerName
```

# Example Routes

default example route for vue:

http://localhost:8000/

default example routes for api:

http://localhost:8000/api/v1/example/create-example-user

body:
```json
{
	"field_one":"Hello",
	"field_two":"Word"
}
```

http://localhost:8000/api/v1/example/edit-example-profile

body:

```json
{
	"api_token":"FLH7CMhUiDN54OkjFBxN1CeWnXIgjsJY36Gz3lCy7IEia81MO5lG9UW7efGK",
		"field_one":"Hello",
	"field_two":"Sajjad"

}
```

http://localhost:8000/api/v1/example/get-example


body:


```json
{
	"api_token":"FLH7CMhUiDN54OkjFBxN1CeWnXIgjsJY36Gz3lCy7IEia81MO5lG9UW7efGK",
		"field_one":"Hello",
	"field_two":"Sajjad"

}
```

http://localhost:8000/api/v1/example/get-examples-list


body:


```json
{
	"api_token":"FLH7CMhUiDN54OkjFBxN1CeWnXIgjsJY36Gz3lCy7IEia81MO5lG9UW7efGK",
	"offset":"0"
}
```