<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::create([
            "name"  => "admin",
            "email" => "admin@admin.com",
            "password" => bcrypt("admin123"),
            "role_id" => 1,
        ]);

        $this->call([
            SkalaLevelSeeder::class,
            PegawaiSeeder::class,
            RoleSeeder::class,
            TeknisiSeeder::class,
            StatusSeeder::class
        ]);
    }
}
