@extends('assign-roles::layouts.app')

@section('title', settings('title', 'Assign Roles'))

@section('module-content')
    <div class="py-5">
        <div class="container">
            <div class="row">
                <div class="col-md-12" style="text-align: center;">
                    
                    <h2 class="">{{settings('title', '')}}</h2>
                    <p class="">{{settings('subtitle', '')}}</p>
                    
                    <add-role
                        :allowed="{{json_encode($positionSetting['allowed'])}}"
                        :only-one-role="{{json_encode($positionSetting['only_one_role'])}}"></add-role>
                    <role-table
                        :allowed="{{json_encode($positionSetting['allowed'])}}"
                        :only-one-user="{{json_encode($positionSetting['only_one_user'])}}"
                        :user-only-has-one-role="{{json_encode($positionSetting['user_only_has_one_role'])}}"
                        :only-one-role="{{json_encode($positionSetting['only_one_role'])}}"></role-table>
                </div>
            </div>
        </div>
    </div>
@endsection