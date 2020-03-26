@extends('assign-roles::layouts.app')

@section('title', settings('title', 'No Permission Settings'))

@section('module-content')
    <div class="py-5">
        <div class="container">
            <div class="row">
                <div class="col-md-12" style="text-align: center;">

                    <h2 class="">{{settings('title', '')}}</h2>
                    <p class="">{{settings('no_settings', '')}}</p>

                </div>
            </div>
        </div>
    </div>
@endsection