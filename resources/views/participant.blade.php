@extends('assign-roles::layouts.app')

@section('title', settings('title', 'Assign Roles'))

@section('module-content')
    <p-page-content title="{{settings('title')}}" subtitle="{{settings('subtitle')}}">
        <roles
            :allowed="{{json_encode($positionSetting['allowed'])}}"
            :only-one-user="{{json_encode($positionSetting['only_one_user'])}}"
            :user-only-has-one-role="{{json_encode($positionSetting['user_only_has_one_role'])}}"
            :only-one-role="{{json_encode($positionSetting['only_one_role'])}}"></roles>
    </p-page-content>

@endsection
