<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class TeknisiSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                "name" => "Joko",
                "email" => "joko@gmail.com",
                "password" => Hash::make('teknisi'),
                'role_id'   => 3
            ],
            [
                "name" => "Sukma",
                "email" => "sukma@gmail.com",
                "password" => Hash::make('teknisi'),
                'role_id'   => 3
            ]
        ];

        foreach ($data as $item) {
            User::create([
                'name' => $item['name'],
                'email' => $item['email'],
                'password' => $item['password'],
                'role_id' => $item['role_id']
            ]);
        }
    }
}
