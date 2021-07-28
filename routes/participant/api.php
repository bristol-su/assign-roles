<?php

use Illuminate\Support\Facades\Route;

Route::middleware(\BristolSU\Module\AssignRoles\Http\Middleware\BindRoleRepository::class)->group(function() {
    Route::resource('role', \BristolSU\Module\AssignRoles\Http\Controllers\ParticipantApi\RoleController::class)->only('index', 'store', 'destroy', 'update');

    Route::prefix('role/{role}')->group(function() {
        Route::resource('user', \BristolSU\Module\AssignRoles\Http\Controllers\ParticipantApi\AssignController::class)->only('update', 'destroy');
    });
    Route::resource('members', \BristolSU\Module\AssignRoles\Http\Controllers\ParticipantApi\MemberController::class)->only('index');
});
