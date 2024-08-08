<?php

namespace App\Http\Controllers;

use App\Http\Requests\AkunKaryawanStoreRequest;
use App\Http\Requests\AkunKaryawanUpdateRequest;
use App\Http\Resources\MasterKaryawanResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class AkunKaryawanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $pegawai = User::where('role_id', 2)->orderBy('id', 'DESC')->paginate(10);
        $karyawan = MasterKaryawanResource::collection($pegawai);
        return Inertia::render('Karyawan/Index', compact('karyawan'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(AkunKaryawanStoreRequest $request)
    {
        $request['password'] = Hash::make("password");
        $request['role_id'] = 2;
        User::create($request->all());
        return redirect()->route('akun_karyawan.index')->with('success', 'Data berhasil ditambahkan');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(AkunKaryawanUpdateRequest $request, string $id)
    {
        $user = User::find($id);
        $user->update($request->all());
        return redirect()->route('akun_karyawan.index')->with('success', 'Data berhasil diubah');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $user = User::find($id);
        $user->delete();
        return redirect()->route('akun_karyawan.index')->with('success', 'Data berhasil dihapus');
    }
}
