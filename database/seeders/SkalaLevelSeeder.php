<?php

namespace Database\Seeders;

use App\Models\SkalaLevel;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SkalaLevelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                "level" => "A",
                "point" => 100
            ],
            [
                "level" => "B",
                "point" => 80
            ],
            [
                "level" => "C",
                "point" => 60
            ]
        ];

        foreach ($data as $item) {
            SkalaLevel::create([
                "level" => $item["level"],
                "point" => $item["point"]
            ]);
        }
    }
}
