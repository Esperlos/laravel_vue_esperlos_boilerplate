<?php


namespace App\Http\Helpers;

use Kavenegar\KavenegarApi;
use Kavenegar\Exceptions\ApiException;
use Kavenegar\Exceptions\HttpException;

class SmsPanelHelper
{

    public static function sendSms($phoneNumber,$tempCode)

    {
        try {
            $api = new KavenegarApi(config('kavenegar.apikey'));
            $sender = "10004346";
            $message = "کد احراز هویت شما: ".$tempCode;
            $receptor = array($phoneNumber);
            $result = $api->Send($sender, $receptor, $message);
            if ($result) {
                foreach ($result as $r) {
                    echo "messageid = $r->messageid";
                    echo "message = $r->message";
                    echo "status = $r->status";
                    echo "statustext = $r->statustext";
                    echo "sender = $r->sender";
                    echo "receptor = $r->receptor";
                    echo "date = $r->date";
                    echo "cost = $r->cost";
                }
            }
        } catch (ApiException $e) {
            //In case that error throw 200
            echo $e->errorMessage();
        } catch (HttpException $e) {
//in case that there is any problem to connect to webservie  this error thow
            echo $e->errorMessage();
        }

    }

}