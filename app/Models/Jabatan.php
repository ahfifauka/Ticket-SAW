<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Jabatan extends Model
{
    use HasFactory;
    protected $fillable = ['jabatan', 'user_id', 'skala_level_id'];

    public function user()
    {
        return $this->hasMany(User::class);
    }

    public function level()
    {
        return $this->belongsTo(SkalaLevel::class, 'skala_level_id');
    }
}
