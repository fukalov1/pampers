<?php

namespace App\Admin\Controllers;

use App\Group;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;

class GroupsController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = 'App\Group';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new Group);

//        $grid->column('id', __('Id'));
        $grid->column('name', __('Наименование'));
        $grid->column('order', __('Номер'));
        $grid->show('Показано')->display(function ($show){
            return $show ? 'да' : 'нет';
        });
        $grid->goods('Товары')->display(function ($goods) {
            $count = count($goods);
            return "<a href='/admin/goods?set={$this->id}' title='перейти к товарам группы'><span class='label label-warning'>{$count}</span></a>";
        });

//        $grid->column('created_at', __('Created at'));
//        $grid->column('updated_at', __('Updated at'));

        return $grid;
    }

    /**
     * Make a show builder.
     *
     * @param mixed $id
     * @return Show
     */
    protected function detail($id)
    {
        $show = new Show(Group::findOrFail($id));

        $show->field('id', __('Id'));
        $show->field('name', __('Name'));
        $show->field('order', __('Order'));
        $show->field('show', __('Show'));
        $show->field('created_at', __('Created at'));
        $show->field('updated_at', __('Updated at'));

        return $show;
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form()
    {
        $form = new Form(new Group);

        $form->text('name', __('Name'));
        $form->text('link', __('Имя якоря'));
        $form->number('order', __('Order'));
        $form->switch('show', __('Show'))->default(1);
//        $form->hasMany('sort_groups', function (Form\NestedForm $form) {
//            $form->number('order', 'Номер показа группы');
//            $form->text('domen','Домен');
//        });


        return $form;
    }
}
