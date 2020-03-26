<?php

use Illuminate\Support\Facades\Route;

Route::namespace('ParticipantApi')->group(function() {
    Route::resource('role', 'RoleController')->only('index', 'store', 'destroy', 'update');
    
    Route::prefix('role/{role}')->group(function() {
        Route::resource('user', 'AssignController')->only('update', 'destroy');
    });
    Route::resource('members', 'MemberController')->only('index');
});