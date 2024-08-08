<?php

namespace App\Http\Controllers;

use App\Http\Resources\MasterCaseCategoryResource;
use App\Models\CaseCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CaseCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = CaseCategory::all();
        $cases = MasterCaseCategoryResource::collection($query);
        return Inertia::render('CaseCategory/Index', compact('cases'));
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
    public function store(Request $request)
    {
        $request->validate([
            "category"  => ['required', 'string', 'unique:case_categories'],
        ], [
            "category.required" => "Nama category tidak boleh kosong",
            "category.unique"   => "Nama category sudah ada",
        ]);

        CaseCategory::create($request->all());
        return redirect()->route('case_category.index')->with('success', 'Data berhasil ditambahkan');
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
    public function update(Request $request, string $id)
    {
        $request->validate([
            "category"  => ['required', 'string', 'unique:case_categories,category,' . $id],
        ], [
            "category.required" => "Nama category tidak boleh kosong",
            "category.unique"   => "Nama category sudah ada",
        ]);

        $category = CaseCategory::findOrFail($id);

        $category->update($request->all());
        return redirect()->route('case_category.index')->with('success', 'Data berhasil diupdate');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
