<?php

namespace BristolSU\Module\AssignRoles\Http\Controllers;

class AdminPageController extends Controller
{
    
    public function index()
    {
        $this->authorize('admin.view-page');
        
        return view('assign-roles::admin');
    }
    
}