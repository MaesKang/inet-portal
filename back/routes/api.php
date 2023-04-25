<?php

use Illuminate\Http\Request;


Route::resource('enrolledAccount', 'EnrolledAccountController');

Route::group(['middleware' => 'auth:api'], function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::get('/tests', function () {
        return response()->json([
            'Creator' => [
                'Programmer' => 'Mice'
            ]
        ]);
    });
});
