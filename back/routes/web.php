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
use App\Http\Controllers\PlaceController;
use App\Http\Controllers\LeaderBoardController;

$router->get('/items-index', 'ItemController@index');

$router->get('/places-index', 'PlaceController@index');
$router->get('/places/{id}', 'PlaceController@show');

$router->get('/leaderboard-index', 'LeaderBoardController@index');
$router->post('/leaderboard', 'LeaderBoardController@store');

$router->get('/room-index', 'RoomController@index');
$router->get('/room/{id}', 'RoomController@show');
