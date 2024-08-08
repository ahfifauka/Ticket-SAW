<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class MasterJabatanUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "jabatan"   => ['required', 'string', 'unique:jabatans,jabatan,' . $this->id],
            "skala_level_id" => ['required', 'exists:skala_levels,id']
        ];
    }

    public function messages(): array
    {
        return [
            'jabatan.required' => 'Jabatan tidak boleh kosong',
            'jabatan.unique' => 'Jabatan sudah ada',
            'skala_level_id.required' => 'Skala level tidak boleh kosong',
            'skala_level_id.exists' => 'Skala level tidak valid',
        ];
    }
}
