<?php

namespace App\Admin\Controllers;

use App\Group;
use App\SortGroup;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;

class SortGroupController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $group='';
    protected $title = 'Сортировка групп для домена';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {

        $this->getHeader();

        $grid = new Grid(new SortGroup);
        $grid->header(function ($query) {
            return "<div style='padding: 10px;'>Группа: <b>".$this->group."</b></div>";
        });
        $grid->model()->where('group_id', session('group_id'));

//        $grid->column('id', __('Id'));
//        $grid->column('group.name', __('Группа'));
        $grid->column('domen', __('Domen'));
        $grid->column('order', __('Order'));
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
        $show = new Show(SortGroup::findOrFail($id));

        $show->field('id', __('Id'));
        $show->field('group_id', __('Group id'));
        $show->field('domen', __('Domen'));
        $show->field('order', __('Order'));
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
        $form = new Form(new SortGroup);

        $form->hidden('group_id')->value(session('group_id'));
        $form->text('domen', __('Domen'));
        $form->number('order', __('Order'))->default(0);

        return $form;
    }

    public function getHeader()
    {
        $group = Group::find(session('group_id'));
//        dd($group->name);
        $this->group = $group->name;
        $this->title .= ' - '.$group->name;
//            dd($this->title);
    }
}
