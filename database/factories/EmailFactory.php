<?php

use Faker\Generator as Faker;

$factory->define(App\Email::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'value' => $faker->unique()->safeEmail,
    ];
});
