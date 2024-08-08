<?php

namespace App\Http\Controllers;

use App\Http\Requests\MasterTeknisiStoreRequest;
use App\Http\Requests\MasterTeknisiUpdateRequest;
use App\Http\Resources\MasterTeknisiResource;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TeknisiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = User::where('role_id', 3)->orderBy('id', 'DESC')->paginate(10);
        $teknisi = MasterTeknisiResource::collection($query);
        return Inertia::render('Teknisi/Index', compact('teknisi'));
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
    public function store(MasterTeknisiStoreRequest $request)
    {
        $request['password'] = "teknisi";
        $request['role_id']  = 3;
        $user = User::create($request->all());
        return redirect()->route('teknisi.index')->with('success', 'Data berhasil ditambahkan!');
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
    public function update(MasterTeknisiUpdateRequest $request, string $id)
    {
        $teknisi = User::find($id);
        $teknisi->update($request->all());
        return redirect()->route('teknisi.index')->with('success', 'Data berhasil diubah!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $teknisi = User::find($id);
        $teknisi->delete();
        return redirect()->route('teknisi.index')->with('success', 'Data berhasil dihapus!');
    }
}
