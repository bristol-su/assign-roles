@extends('assign-roles::layouts.app')

@section('title', settings('title', 'Assign Roles'))

@section('module-content')
    <p-page-content title="{{settings('title')}}" subtitle="{{settings('subtitle')}}">
        Head to <a href="{{route('control')}}">Control</a> to see the new roles.
    </p-page-content>
@endsection
