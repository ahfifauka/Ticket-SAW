<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class MasterTeknisiUpdateRequest extends FormRequest
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
            "name" => "required",
            "email" => "required|email:rfc:dns|unique:users,email," . $this->id,
        ];
    }

    public function messages(): array
    {
        return [
            "name.required" => "Nama tidak boleh kosong",
            "email.required" => "Email tidak boleh kosong",
            "email.email" => "Email tidak valid",
            "email.unique" => "Email sudah terdaftar",
        ];
    }
}
