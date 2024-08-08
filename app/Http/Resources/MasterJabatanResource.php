<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MasterJabatanResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id"    => $this->id,
            "jabatan" => $this->jabatan,
            "skala_level_id" => $this->skala_level_id,
            "level" => $this->level->level ?? null,
            "point" => $this->level->point ?? null,
        ];
    }
}
