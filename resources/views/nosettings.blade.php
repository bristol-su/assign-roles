@extends('assign-roles::layouts.app')

@section('title', settings('title', 'No Permission Settings'))

@section('module-content')
    <p-page-content title="{{settings('title')}}" subtitle="{{settings('no_settings')}}">

    </p-page-content>
@endsection
