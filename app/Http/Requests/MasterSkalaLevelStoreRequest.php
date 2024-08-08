<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class MasterSkalaLevelStoreRequest extends FormRequest
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
            'level' => 'required|string|max:255|unique:skala_levels',
            'point' => 'required|integer|min:1|max:100',
        ];
    }

    public function messages(): array
    {
        return [
            'level.required' => 'Level harus diisi',
            'level.string' => 'Level harus berupa string',
            'level.max' => 'Level maksimal 255 karakter',
            'level.unique' => 'Level sudah ada',
            'point.required' => 'Point harus diisi',
            'point.integer' => 'Point harus berupa angka',
            'point.min' => 'Point minimal 1',
            'point.max' => 'Point maksimal 100',
        ];
    }
}
