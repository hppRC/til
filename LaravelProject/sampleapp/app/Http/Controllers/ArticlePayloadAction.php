<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Resources\ArticleResource;
use Illuminate\Http\Request;

final class ArticlePayloadAction extends Controller
{
    public function __invoke(Request $request)
    {
        $resources = new ArticleResource([
            'id' => 1,
            'title' => 'Laravel REST API',
            'comments' => [
                [
                    'id' => 2134,
                    'body' => 'awesome!',
                    'user_id' => 133345,
                    'user_name' => 'Application Developer',
                ]
                ],
            'user_id' => 13255,
            'user_name' => 'User1'
        ]);
        return $resources->response($request)
                ->header('content-type', 'application/hal+json');
    }
}