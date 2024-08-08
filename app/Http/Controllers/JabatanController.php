<?php

namespace App\Http\Controllers;

use App\Http\Requests\MasterJabatanUpdateRequest;
use App\Http\Requests\MasterJatabanStoreRequest;
use App\Http\Resources\MasterJabatanResource;
use App\Http\Resources\MasterSkalaLevelResource;
use App\Models\Jabatan;
use App\Models\SkalaLevel;
use Illuminate\Http\Request;
use Inertia\Inertia;

class JabatanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Jabatan::all();
        $jabatans = MasterJabatanResource::collection($query);
        $levels = MasterSkalaLevelResource::collection(SkalaLevel::all());
        return Inertia::render('Jabatan/Index', compact('jabatans', 'levels'));
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
    public function store(MasterJatabanStoreRequest $request)
    {
        $jataban = Jabatan::create($request->all());
        return redirect()->back()->with('success', $jataban->jabatan . " berhasil ditambahkan");
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
    public function update(MasterJabatanUpdateRequest $request, string $id)
    {
        $jabatan = Jabatan::findOrFail($id);
        $jabatan->update($request->all());
        return redirect()->back()->with('success', $jabatan->jabatan . " berhasil diubah");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $jabatan = Jabatan::findOrFail($id);
        $jabatan->delete();
        return redirect()->back()->with('success', $jabatan->jabatan . " berhasil dihapus");
    }
}
