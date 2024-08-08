<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreTicketRequest extends FormRequest
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
            "level" => "required",
            'case_category_id' => "required",
            'deskripsi' => "required",
        ];
    }

    public function messages(): array
    {
        return [
            'level.required' => 'Skala Level tidak boleh kosong',
            'case_category_id.required' => 'Kategori Kasus tidak boleh kosong',
            'deskripsi.required' => 'Deskripsi tidak boleh kosong',
        ];
    }
}
