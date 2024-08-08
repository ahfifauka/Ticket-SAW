<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    use HasFactory;
    protected $fillable = [
        'nomor_ticket',
        'requester',
        'case_category_id',
        'level',
        'deskripsi',
        'teknisi',
        'status_id',
        'last_updater',
    ];

    public static function nomorTicket()
    {
        $maxId = Ticket::max('id');
        $kode = "TKT" . str_pad($maxId + 1, 5, "0", STR_PAD_LEFT);
        return $kode;
    }

    public function requesterName()
    {
        return $this->belongsTo(User::class, 'requester');
    }

    public function category()
    {
        return $this->belongsTo(CaseCategory::class, 'case_category_id');
    }

    public function levelName()
    {
        return $this->belongsTo(SkalaLevel::class, 'level');
    }

    public function status()
    {
        return $this->belongsTo(Status::class, 'status_id');
    }
}
