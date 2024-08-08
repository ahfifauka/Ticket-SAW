<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTicketRequest;
use App\Http\Resources\MasterCaseCategoryResource;
use App\Http\Resources\MasterSkalaLevelResource;
use App\Http\Resources\MonitoringTicketResource;
use App\Http\Resources\NewTicketResource;
use App\Models\CaseCategory;
use App\Models\SkalaLevel;
use App\Models\Ticket;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class TicketController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
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
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    public function open_ticket()
    {
        $level = MasterSkalaLevelResource::collection(SkalaLevel::all());
        $case_category = MasterCaseCategoryResource::collection(CaseCategory::all());
        return Inertia::render('Ticket/OpenTicket', compact('level', 'case_category'));
    }

    public function store_ticket(StoreTicketRequest $request)
    {
        $requester = Auth::id();
        Ticket::create([
            "nomor_ticket"  => Ticket::nomorTicket(),
            "requester"     => $requester,
            "case_category_id" => $request->case_category_id,
            "level"         => $request->level,
            "deskripsi"     => $request->deskripsi,
            "status_id"     => 1
        ]);

        return redirect()->route('ticket.open')->with('success', 'Laporan anda berhasil dibuat');
    }

    public function new_ticket()
    {
        $query = Ticket::where('status_id', 1)->get();
        $tickets = NewTicketResource::collection($query);
        return Inertia::render('Ticket/NewTicket', compact('tickets'));
    }
}
