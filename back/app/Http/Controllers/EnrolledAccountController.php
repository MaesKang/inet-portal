<?php

namespace App\Http\Controllers;

use App\enrolled_account;
use Illuminate\Http\Request;

class EnrolledAccountController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $tbl = enrolled_account::all();
        return response()->json($tbl);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        enrolled_account::create($request->all());
        return $this->index();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\enrolled_account  $enrolled_account
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $tbl = enrolled_account::where("user_id", $id)->get();

        return response()->json($tbl);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\enrolled_account  $enrolled_account
     * @return \Illuminate\Http\Response
     */
    public function edit(enrolled_account $enrolled_account)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\enrolled_account  $enrolled_account
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, enrolled_account $enrolled_account)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\enrolled_account  $enrolled_account
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            enrolled_account::destroy($id);

            return $this->index();
        } catch (\Exception $e) {
            return response()->json(['error' => 'There was a problem deleting this item.'], 500);
        }
    }
}
