<?php

use Illuminate\Routing\Router;

Admin::routes();

Route::group([
    'prefix'        => config('admin.route.prefix'),
    'namespace'     => config('admin.route.namespace'),
    'middleware'    => config('admin.route.middleware'),
], function (Router $router) {

    $router->get('/', 'HomeController@index')->name('admin.home');
    $router->resource('groups', GroupsController::class);
    $router->resource('goods', GoodsController::class)->middleware('set_group');
    $router->resource('sort-groups', SortGroupController::class)->middleware('set_group');



});
