<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use Illuminate\Support\Facades\Route;

Route::middleware([\BristolSU\Module\AssignRoles\Http\Middleware\BindRoleRepository::class])->group(function() {
    Route::get('/', 'ParticipantPageController@index');
});
