<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class RegisterController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'username' => ['required', 'unique:users'],
            'password' => ['required', 'min:6', 'confirmed']
        ]);

        User::create([
            'username' => $request->username,
            'password' => Hash::make($request->password)
        ]);
    }
}
