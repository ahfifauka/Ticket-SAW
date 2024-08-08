<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class PegawaiSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create('id_ID');
        for ($i = 1; $i <= 50; $i++) {
            $name = $faker->firstName() . ' ' . $faker->lastName();
            $email = str_replace(' ', '', strtolower($name)) . '@gmail.com';
            User::create([
                'name' => $name,
                'email' => $email,
                'password' => bcrypt('password'),
                'role_id' => 2,
            ]);
        }
    }
}
