<?php

namespace App\Http\Controllers;

use App\Http\Requests\MasterSkalaLevelStoreRequest;
use App\Http\Requests\MasterSkalaLevelUpdateRequest;
use App\Http\Resources\MasterSkalaLevelResource;
use App\Models\SkalaLevel;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SkalaLevelController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = SkalaLevel::all();
        $skala = MasterSkalaLevelResource::collection($query);
        return Inertia::render('Skala/Index', compact('skala'));
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
    public function store(MasterSkalaLevelStoreRequest $request)
    {
        $level = SkalaLevel::create($request->all());
        return redirect()->route('skala_level.index')->with('success',  $level->level . '  berhasil ditambahkan');
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
    public function update(MasterSkalaLevelUpdateRequest $request, string $id)
    {
        $skala = SkalaLevel::find($id);
        $skala->update($request->all());
        return redirect()->route('skala_level.index')->with('success',  $skala->level . '  berhasil diupdate');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $level  = SkalaLevel::find($id);
        $level->delete();
        return redirect()->route('skala_level.index')->with('success',  $level->level . '  berhasil dihapus');
    }
}
