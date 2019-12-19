<?php

use Illuminate\Database\Seeder;

class GoodSeed extends Seeder
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
                'group_id' => 1,
                'name' => 'Кассеты Gillette Mach 3',
                'size' => '2 шт.',
                'price' => '328.83',
                'file' => '/images/glm3_2.jpg'
            ],
            [
                'group_id' => 1,
                'name' => 'Кассеты Gillette Mach 3',
                'size' => '4 шт.',
                'price' => '591.73',
                'file' => '/images/glm3_4.jpg'
            ],
            [
                'group_id' => 1,
                'name' => 'Кассеты Gillette Fusion',
                'size' => '2 шт.',
                'price' => '442.16',
                'file' => '/images/glf_2.jpg'
            ],
            [
                'group_id' => 1,
                'name' => 'Кассеты Gillette Fusion',
                'size' => '4 шт.',
                'price' => '782.94',
                'file' => '/images/glf_5.jpg'
            ],
            [
                'group_id' => 1,
                'name' => 'Кассеты Gillette Venus',
                'size' => '2 шт.',
                'price' => '321.41',
                'file' => '/images/glv_2.jpg'
            ],
            [
                'group_id' => 1,
                'name' => 'Кассеты Gillette Venus',
                'size' => '4 шт.',
                'price' => '545.18',
                'file' => '/images/glv_5.jpg'
            ],
            [
                'group_id' => 1,
                'name' => 'Gillette 2 Одноразовые станки',
                'size' => '3 шт.',
                'price' => '51.36',
                'file' => '/images/gl2_3.jpg'
            ],
            [
                'group_id' => 1,
                'name' => 'Gillette 2 Одноразовые станки',
                'size' => '5 шт.',
                'price' => '79.95',
                'file' => '/images/gl2_5.jpg'
            ],
            [
                'group_id' => 1,
                'name' => 'Gillette 2 Одноразовые станки',
                'size' => '10 шт.',
                'price' => '128.63',
                'file' => '/images/gl2_10.jpg'
            ],
            [
                'group_id' => 1,
                'name' => 'Одноразовые станки Gillette дисплейная карта (24 шт.)',
                'size' => '1 шт.',
                'price' => '18.38',
                'file' => '/images/gl2_12.jpg'
            ],
            [
                'group_id' => 1,
                'name' => 'Gillette Venus 2 Одноразовый станок',
                'size' => '1 шт.',
                'price' => '32.97',
                'file' => '/images/glv2_1.jpg'
            ],

            [
                'group_id' => 2,
                'name' => 'Pampers Active Baby-Dry 13-18кг',
                'size' => '52 шт.',
                'price' => '800.88',
                'file' => '/images/Pampers52.jpg'
            ],
            [
                'group_id' => 2,
                'name' => 'Pampers Active Baby-Dry 11-16кг',
                'size' => '60 шт.',
                'price' => '800.88',
                'file' => '/images/Pampers60.jpg'
            ],
            [
                'group_id' => 2,
                'name' => 'Pampers Active Baby-Dry 9-14кг',
                'size' => '70 шт.',
                'price' => '800.88',
                'file' => '/images/Pampers70.jpg'
            ],
            [
                'group_id' => 2,
                'name' => 'Pampers Active Baby-Dry 6-10кг',
                'size' => '82 шт.',
                'price' => '800.88',
                'file' => '/images/Pampers82.jpg'
            ],
            [
                'group_id' => 3,
                'name' => 'Шампунь Head&Shoulders в ассортименте',
                'size' => '200 мл.',
                'price' => '108.22',
                'file' => '/images/hs160_1.jpg'
            ],
            [
                'group_id' => 3,
                'name' => 'Шампунь Head&Shoulders в ассортименте',
                'size' => '400 мл.',
                'price' => '161.28',
                'file' => '/images/hs160_1.jpg'
            ],
            [
                'group_id' => 3,
                'name' => 'Шампунь Head&Shoulders',
                'size' => '200 мл.',
                'price' => '108.22',
                'file' => '/images/hs160_2.jpg'
            ],
            [
                'group_id' => 3,
                'name' => 'Шампунь Head&Shoulders',
                'size' => '400 мл.',
                'price' => '161.28',
                'file' => '/images/hs160_2.jpg'
            ],
        ];

        DB::table('goods')->insert($data);
    }
}
