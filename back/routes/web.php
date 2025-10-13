<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

use App\Http\Controllers\ItemController;
use App\Http\Controllers\Placeontroller;

$router->get('/items-index', 'ItemController@index');

$router->get('/places-index', 'placeController@index');
$router->get('/places/{id}', 'placeController@show');