<?php

namespace App\Http\Requests\Account;

use Illuminate\Foundation\Http\FormRequest;

class AccountRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'account_name' => [
                'required',
                'string',
                'unique:accounts,account_name',
            ],
            'account_icon' => [
                'required',
                'string',
            ],
            'currency' => [
                'required',
                'string',
            ],
            'amount' => [
                'required',
                'integer',
            ],
            'total_balance' => [
                'integer',
                'nullable'
            ],
            'color' => [
                'string',
                'nullable'
            ],
            'is_included' => [
                'nullable'
            ],
        ];
    }
}
