<?php

use Illuminate\Database\Seeder;

class GroupSeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $data = [
            [
                'name' => 'В наличии оригинальные кассеты Gilette в Москве',
                'link' => 'gillette',
                'order' => '1'
            ],
            [
                'name' => 'В наличии подгузники Pampers Jumbo Pack в Москве',
                'link' => 'pampers',
                'order' => '2'
            ],
            [
                'name' => 'В наличии шампуни Head&Shoulders в Москве',
                'link' => 'shoulders',
                'order' => '3'
            ],
            [
                'name' => 'В наличии шампуни Pantene в Москве',
                'link' => 'shoulders',
                'order' => '4'
            ],
            [
                'name' => 'В наличии порошки Tide, Ariel, Миф в Москве',
                'link' => 'tide',
                'order' => '5'
            ],
            [
                'name' => 'В наличии прокладки Always в Москве',
                'link' => 'always',
                'order' => '6'
            ],
        ];

        DB::table('groups')->insert($data);
    }
}
