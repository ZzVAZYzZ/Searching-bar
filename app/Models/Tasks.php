<?php

    namespace App\Models;

    use Illuminate\Database\Eloquent\Factories\HasFactory;
    use Illuminate\Database\Eloquent\Model;

    class Tasks extends Model
    {
        use HasFactory;
        protected $table = "zoo";
        protected $fillable = ["_No","_Name","_Zoo","_Id","_Piece","_Age"];
        
        public $timestamps = false;
    }
?>