<?php


namespace App\Http\Helpers;


use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ResponseHelper
{
    /**
     * any controller must begin with this function
     * @param $errors
     * @param $status
     * @param $data
     * @return JsonResponse
     */
    public static function jsonResponse($errors, $status, $data)
    {
        return response()->json(array_combine(config('app.response_keys'), [$errors, $status, $data]), $status);
    }


}