<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class MasterTeknisiStoreRequest extends FormRequest
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
            "name"  => ['required'],
            "email" => ['required', 'email:rfc:dns', 'unique:users,email'],
        ];
    }

    public function messages(): array
    {
        return [
            "name.required" => "Nama harus diisi",
            "email.required" => "Email harus diisi",
            "email.email" => "Email tidak valid",
            "email.unique" => "Email sudah terdaftar",
        ];
    }
}
