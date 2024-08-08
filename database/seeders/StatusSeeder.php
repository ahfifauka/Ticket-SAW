<?php

namespace Database\Seeders;

use App\Models\Status;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class StatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $status = ['Open', 'Closed', 'Pending', 'In Progress', 'On Hold', 'Resolved', 'Reopened', 'Abort'];
        foreach ($status as $key) {
            Status::create([
                "status"    => $key
            ]);
        }
    }
}
