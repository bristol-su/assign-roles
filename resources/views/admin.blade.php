@extends('assign-roles::layouts.app')

@section('title', settings('title', 'Assign Roles'))

@section('module-content')
    <div class="py-5">
        <div class="container">
            <div class="row">
                <div class="col-md-12" style="text-align: center;">

                    <h2 class="">{{settings('title', 'Assign Roles')}}</h2>
                    <p class="">{{settings('subtitle', '')}}</p>
                    
                    Head to <a href="{{route('control')}}">Control</a> to see the new roles.
                </div>
            </div>
        </div>
    </div>
@endsection