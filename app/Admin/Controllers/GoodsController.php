<?php

namespace App\Admin\Controllers;

use App\Good;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;

class GoodsController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $group='';
    protected $title = 'Товары';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {

        $this->getHeader();


        $grid = new Grid(new Good);
        $grid->header(function ($query) {
            return "<div style='padding: 10px;'>Группа: <b>".$this->group."</b></div>";
        });

        $grid->column('id', __('Id'));
        $grid->column('group_id', __('Group id'));
        $grid->column('name', __('Name'));
        $grid->column('size', __('Size'));
        $grid->column('price', __('Price'));
        $grid->column('created_at', __('Created at'));
        $grid->column('updated_at', __('Updated at'));

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
        $show = new Show(Good::findOrFail($id));

        $show->field('id', __('Id'));
        $show->field('group_id', __('Group id'));
        $show->field('name', __('Name'));
        $show->field('size', __('Size'));
        $show->field('price', __('Price'));
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
        $form = new Form(new Good);

        $form->number('group_id', __('Group id'));
        $form->text('name', __('Name'));
        $form->text('size', __('Size'));
        $form->decimal('price', __('Price'));

        return $form;
    }

    public function getHeader()
    {
        $group = Customer::find(session('customer_id'));
//        dd($group->name);
        $this->group = $group->name;
        $this->title .= ' - '.$group->name;
//            dd($this->title);
    }
}
